# We use node:7.4.0-alpine because it is much smaller
# than the official node image and it is just what we
# need to run the node application.
#
FROM node:7.5.0-alpine

MAINTAINER Christian Vecchiola

LABEL solution="Solution Name"
LABEL component="Component Name"

# Some commands do not like to be run in superuser mode
# We create a user to be sure that we don't
# have issues while running the build script.
#
# See best practices on how to run node applications in Docker here:
# https://github.com/nodejs/docker-node/blob/master/docs/BestPractices.md
#
RUN addgroup -S npm && adduser -S -g npm npm

# Alpine does not come with git installed, so we add it.
#
RUN apk update && apk upgrade && \
    apk add --no-cache bash git openssh build-base g++
WORKDIR /opt/app

# We copy the package.json to leverage the layer caching
# capabilities of Docker. If the package.json is not 
# changed, the build process will not run the npm install
# command, which is the next command in the Dockerfile.
# 
# The rationale behind this is the following: if the package.json
# is not changed, Docker will use the previously cached layer
# (outcome of previous image builds). When it comes to execute
# the next instruction, which is unchanged it will be able to
# reuse a previously cached layer associated to the instruction
# "RUN npm install" which has not changed. 
#
COPY ./package.json /opt/app/package.json

# If the package.json has not changed, the previous layer has 
# not changed, so this layer is not changed either and the
# command will not be re-executed but the associated layer
# will be added to the image.
#
# NOTE: this optimisation ONLY WORKS if we used fixed versions
#       of the packages in the package.json and we do not have
#       any wildcards, which would make npm lookup for new and
#       updated versions. In this case the updates would not 
#       be pulled in because the cached layer has been re-used.
#       This should not be a problem for a production deployment
#       where we should always fix versions.
#
RUN npm install
	

# We copy the rest of the application, this will override the
# previously copied files, but they're the same so we don't
# bother.
#
COPY .babelrc /opt/app/.babelrc
COPY server /opt/app/server
COPY app /opt/app/app
COPY webpack.config.js /opt/app/webpack.config.js

# We execute the webpack transpilation once we have copied the
# application files so that we can prepare the application for
# packageing and distribution.
#
RUN chown -R npm /opt/app && npm run build 

# NOTE: there is no point in removing source files because they
#       will be available in the image as part of its build
#       history. The only reason to remove the source files
#       after a build would be reduce a possible attach surface
#       and prevent an hostile environment from looking at the
#       source code during container inspection. These files
#       would still be available in the image that was used to
#       create the container.


USER npm

# This is to prevent that the command gets overridden from
# outside.
#
ENTRYPOINT ["npm"]

# This is to specify which command to run with NPM.
#
CMD ["run", "serve"]

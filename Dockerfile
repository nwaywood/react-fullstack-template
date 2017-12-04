FROM node:8

LABEL solution="Micro-Insurance"
LABEL component="dashboard"

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

RUN npm install


# We copy the rest of the application, this will override the
# previously copied files
#
COPY .babelrc /opt/app/.babelrc
COPY server /opt/app/server
COPY app /opt/app/app
COPY webpack.config.js /opt/app/webpack.config.js


RUN npm run build

# This is to prevent that the command gets overridden from
# outside.
#
ENTRYPOINT ["npm"]

# This is to specify which command to run with NPM.
#
CMD ["run", "serve"]

EXPOSE 3000

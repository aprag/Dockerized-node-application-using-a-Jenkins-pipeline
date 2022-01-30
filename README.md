# Dockerized-node-application-using-a-Jenkins-pipeline

On a github repo, create a sample node application. for example, it could be a very basic react app, using the command:

npx create-react-app my-app-name

The app must be launchable on a docker image. Hence, the project directory should contain a Dockerfile with instructions on building the node application. Keep in mind that there exists a Node image on Docker hub.

On the Jenkins side, you should use a pipeline, linked to your github repo, and the build instructions must contain a stage to build the Docker image.

Your project deliverable is in the form of a link to your github repo, and a screenshot of your Jenkins build configurations, the build success screen, and the console output on build success.

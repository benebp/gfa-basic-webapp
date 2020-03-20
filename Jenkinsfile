pipeline {
    agent any
    environment {
        image = ""
    }
    stages {
        stage('build') {
            steps {
                sh 'npm install'
                sh 'npm run test'
            }
        }
        stage('deploy to dockerhub') {
            steps {
                script{
                    image = docker.build("benebp/basic-webapp:latest")
                }
                script{
                    docker.withRegistry('', "benebp-dockerhub"){
                        image.push()
                    }
                }
            }
        }
        stage('deploy to aws ebs') {
            steps {
                withAWS(credentials:"benebp-aws", region:"eu-west-3") {
                sh 'aws s3 cp ./Dockerrun.aws.json s3://benebp-static/Dockerrun.aws.json'
                sh 'aws elasticbeanstalk create-application-version \
                --application-name "basic-webapp" --version-label "$GIT_COMMIT" \
                --source-bundle S3Bucket="benebp-static",S3Key="Dockerrun.aws.json" \
                --auto-create-application'
                sh 'aws elasticbeanstalk update-environment --application-name "basic-webapp" \
                --environment-name "basic-webapp-env" --version-label "$GIT_COMMIT"'
                }
            }
        }
    }
}
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
                    image = docker.build("benebp/malacok-27")
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
                sh 'aws s3 cp ./Dockerrun.aws.json s3://benebp-statichtml/Dockerrun.aws.json'
                sh 'aws elasticbeanstalk create-application-version \
                --application-name "malacok-27" --version-label "$BUILD_ID" \
                --source-bundle S3Bucket="benebp-statichtml",S3Key="Dockerrun.aws.json" \
                --auto-create-application'
                sh 'aws elasticbeanstalk update-environment --application-name "malacok-27" \
                --environment-name "malacok27-env" --version-label "Dockerrun.aws.json"'
                }
            }
        }
    }
}
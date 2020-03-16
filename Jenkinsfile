pipeline {
    agent { docker { image 'node:6.3' } }
    stages {
        stage('build') {
            steps {
                sh 'npm install'
                sh 'npm run test'
            }
        }
        stage('deploy') {
            docker.build("benebp/malacok-27")
            docker.withRegistry('https://registry.hub.docker.com', 'benebp-dockerhub') {
            // app.push("${env.BUILD_NUMBER}")
            app.push("latest")
        }
    }
}
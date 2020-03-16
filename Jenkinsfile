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
            steps {
                sh 'docker build -t benebp/malacok-27'
                sh 'docker push benebp/malacok-27'
            }
        }
    }
}
pipeline {
    agent any

    stages {
        stage('Build and Test') {
            parallel {
                stage('Master Branch') {
                    when {
                        branch 'master'
                    }
                    steps {
                        echo 'Building and testing the master branch...'
                        echo 'Deploying master branch completed.'
                    }
                }

                stage('Develop Branch') {
                    when {
                        branch 'develop'
                    }
                    steps {
                        echo 'Building and testing the develop branch...'
                        echo 'Deploying develop branch completed.'
                    }
                }

                stage('Feature Branches') {
                    when {
                        expression { env.BRANCH_NAME.startsWith('feature-') }
                    }
                    steps {
                        echo "Building and testing feature branch: ${env.BRANCH_NAME}"
                        echo "Deploying feature branch ${env.BRANCH_NAME} completed."
                    }
                }
            }
        }
    }

    post {
        success {
            echo " Build successful for branch: ${env.BRANCH_NAME}"
        }
        failure {
            echo "Build failed for branch: ${env.BRANCH_NAME}"
        }
    }
}
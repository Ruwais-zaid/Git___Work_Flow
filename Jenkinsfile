pipeline {
    agent any

    options {
        skipDefaultCheckout(false)
        timestamps()
    }

    stages {
        stage('Build and Test') {
            parallel {
                stage('Feature Branches') {
                    when {
                        expression {
                            env.BRANCH_NAME.startsWith('feature/')
                        }
                    }
                    steps {
                        echo "Building feature branch: ${env.BRANCH_NAME}"
                        sh '''
                            echo "Installing dependencies..."
                            npm install
                            echo "Running build..."
                            npm run build
                        '''
                    }
                }

                stage('Develop Branch') {
                    when {
                        branch 'develop'
                    }
                    steps {
                        echo "Building develop branch"
                        sh '''
                            npm install
                            npm run lint
                            npm test
                        '''
                    }
                }

                stage('Master Branch') {
                    when {
                        branch 'master'
                    }
                    steps {
                        echo "Deploying master branch"
                        sh '''
                            npm install
                            npm run build
                            echo "Deploying to production..."
                            # Add deploy command here (e.g. scp, docker push, etc.)
                        '''
                    }
                }
            }
        }
    }

    post {
        success {
            echo " Build completed successfully for branch: ${env.BRANCH_NAME}"
        }
        failure {
            echo " Build failed for branch: ${env.BRANCH_NAME}"
        }
    }
}

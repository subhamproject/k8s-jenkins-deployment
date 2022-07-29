pipeline{
        agent any
        stages {
                stage('Build') {
                        steps {
                                sh './image_build.sh'
                        }
                }
             stage('Push') {
                        steps {
                                sh './image_push.sh'
                        }
                }
        post {
                always {
                        cleanWs()
                        echo "done"
                }
        }

}

pipeline{
        agent any
        stages {
                stage('Build') {
                        steps {
                                sh 'sudo docker build -t patelsaheb/hellonodejs:eks .'
                        }
                }
             stage('Push') {
                        steps {
                                sh 'sudo docker push patelsaheb/hellonodejs:eks'
                        }
                }
        post {
                always {
                        cleanWs()
                        echo "done"
                }
        }

}

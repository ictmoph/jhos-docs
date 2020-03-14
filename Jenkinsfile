def notifySlack(token, status) {
    def jobName = env.JOB_NAME
    def buildNo = env.BUILD_NUMBER
      
    def url = "https://hooks.slack.com/services/${token}"
    def message = "Deploy Jhos Docs ${jobName} Build #${buildNo} ${status}"
    sh "curl --location --request POST ${url} --header 'Content-Type: application/x-www-form-urlencoded' --data-urlencode 'payload={\"text\":\"${message}\"}'"
    // sh "echo ${url}"
}

pipeline {
    environment {
      slack_token = credentials('slack_token')
    }
    agent any
   
    tools {nodejs "node"}
   
    stages {
       
        stage('Install dependencies') {
            steps {
                sh 'npm install'
            }
        }
        stage('Building app') {
            steps {
                sh 'npm run docs:build'
            }
        }
        stage('Upload') { 
            steps {
                sshagent(['sshjenken33']) {
                    sh 'scp -r -P 2222 -o StrictHostKeyChecking=no docs/.vuepress/dist jenkins@203.157.240.13:/var/www/html/jhos/docs'
                }
            }
        }
    }
    post{
        success{
            notifySlack(slack_token, "succeed")
        }
        failure{
            notifySlack(slack_token, "failed")
        }
    }

}
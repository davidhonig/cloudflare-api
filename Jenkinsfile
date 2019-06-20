pipeline{
    agent{
        label "master"
    }
    stages{
        stage("A"){
            steps{
                script {
                    committerEmail = sh (
                        script: 'git --no-pager show -s --format=\'%ae\'',
                        returnStdout: true
                    ).trim()
                }
                echo "${committerEmail}"
                echo "${env.GIT_AUTHOR_EMAIL} and ${env.GIT_COMMITTER_EMAIL}"
            }
        }
    }
} 
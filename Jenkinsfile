pipeline{
    agent{
        label "master"
    }
    stages{
        stage("A"){
            steps{
                GIT_EMAIL=$(git --no-pager show -s --format='%ae' $GIT_COMMIT)
                script {
                    committerEmail = sh (
                        script: 'git --no-pager show -s --format=\'%ae\'',
                        returnStdout: true
                    ).trim()
                }
                echo "${committerEmail}"
                echo "from git ${env.GIT_EMAIL}
            }
        }
    }
} 
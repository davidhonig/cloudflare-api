pipeline{
    agent{
        label "master"
    }
    stages{
        stage("A"){
            steps{
                
                script {
                    GIT_EMAIL=sh(
                        script: "git --no-pager show -s --format='%ae' $GIT_COMMIT",
                        returnStdout: true
                    ).trim()
                    committerEmail = sh (
                        script: 'git --no-pager show -s --format=\'%ae\'',
                        returnStdout: true
                    ).trim()
                }
                echo "${committerEmail}"
                echo "from git ${GIT_EMAIL}
            }
        }
    }
} 
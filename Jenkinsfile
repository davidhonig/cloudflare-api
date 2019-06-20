pipeline{
    agent{
        label "master"
    }
    stages{
        stage("A"){
            steps{
                echo "${env.user.email} and ${env.user.name}"
                echo "${env}"
                echo "${env.GIT_AUTHOR_EMAIL} and ${env.GIT_COMMITTER_EMAIL}"
            }
        }
    }
} 
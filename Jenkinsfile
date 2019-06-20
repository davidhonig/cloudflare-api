pipeline{
    agent{
        label "master"
    }
    stages{
        stage("A"){
            steps{
                // echo "${user.email} and ${user.name}"
                echo "${env}"
                echo "${env.GIT_AUTHOR_EMAIL} and ${env.GIT_COMMITTER_EMAIL}"
            }
        }
    }
} 
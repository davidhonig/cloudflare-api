pipeline{
    agent{
        label "master"
    }
    stages{
        stage("A"){
            steps{
                echo "${user.email} and ${user.name}"
                echo "${GIT_AUTHOR_EMAIL} and ${GIT_COMMITTER_EMAIL}"
            }
        }
    }
} 
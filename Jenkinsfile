pipeline{
    agent{
        label "master"
    }
    stages{
        stage("A"){
            steps{
                echo "${BUILD_USER_EMAIL}"
                echo "${user.email}"
                echo "${GIT_AUTHOR_EMAIL} and ${GIT_COMMITTER_EMAIL}"
            }
        }
    }
} 
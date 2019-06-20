pipeline{
    agent{
        label "master"
    }
    stages{
        stage("A"){
            steps{
                echo "${BUILD_USER_EMAIL}"
                echo "${user.email}"
            }
        }
    }
} 
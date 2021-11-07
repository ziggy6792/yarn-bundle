COGNITO_USER_POOL_ID="ap-southeast-1_zvtAky2Nj"
uname="Google_117601808302524213279"

aws cognito-idp admin-delete-user --user-pool-id $COGNITO_USER_POOL_ID --username $uname

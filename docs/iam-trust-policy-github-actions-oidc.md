# IAM Trust Policy for GitHub Actions OIDC

Replace <ACCOUNT_ID>, <REPO>, and <ROLE_NAME> with your values.

```
{
  "Version": "2012-10-17",
  "Statement": [
    {
      "Effect": "Allow",
      "Principal": {
        "Federated": "arn:aws:iam::543816070942:oidc-provider/token.actions.githubusercontent.com"
      },
      "Action": "sts:AssumeRoleWithWebIdentity",
      "Condition": {
        "StringEquals": {
          "token.actions.githubusercontent.com:sub": "repo:akshaykam/AWS_Amplify_Angular_Bookmyseat_Service:ref:refs/heads/main"
        }
      }
    }
  ]
}
```

- Attach this trust policy to your IAM role.
- Grant the role permissions for Amplify, S3, and CloudFront as needed.

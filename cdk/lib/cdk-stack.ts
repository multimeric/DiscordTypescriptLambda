import { Stack, StackProps } from 'aws-cdk-lib';
import { Construct } from 'constructs';
import * as lambda from "aws-cdk-lib/aws-lambda";
import * as apigateway from "aws-cdk-lib/aws-apigateway";
import * as path from "path";
import * as cdk from "aws-cdk-lib"

export class CdkStack extends Stack {
  constructor(scope: Construct, id: string, props?: StackProps) {
    super(scope, id, props);

    // The lambda that runs in response to each bot interaction
    const handler = new lambda.Function(this, 'discordInteractions', {
      handler: 'handler.interactions',
      code: lambda.Code.fromAsset(path.resolve(__dirname, '../../src'), {
        bundling: {
          environment: {

          },
          image: lambda.Runtime.NODEJS_14_X.bundlingImage,
          command: [
            'npm', 'run', 'release'
          ],
        },
        exclude: [
            "**/*.ts"
        ]
      }),
      runtime: lambda.Runtime.NODEJS_14_X,
    });

    const gateway = new apigateway.LambdaRestApi(this, 'apiGateway', {
      handler,
    });

    new cdk.CfnOutput(this, 'discordEndpoint', {
      value: gateway.url,
      description: 'The Interactions Endpoint URL for your discord bot',
      exportName: 'interactionsUrl',
    });
  }
}

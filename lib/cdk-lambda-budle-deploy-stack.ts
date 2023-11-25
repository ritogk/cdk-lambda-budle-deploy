import * as cdk from "aws-cdk-lib"
import { Construct } from "constructs"
import { NodejsFunction } from "aws-cdk-lib/aws-lambda-nodejs"
import { Runtime } from "aws-cdk-lib/aws-lambda"
import * as path from "path"

export class CdkLambdaBudleDeployStack extends cdk.Stack {
  constructor(scope: Construct, id: string, props?: cdk.StackProps) {
    super(scope, id, props);

    const lambdaFunction = new NodejsFunction(this, "sampleFunction", {
      entry: "lib/lambda/sample.ts",
      runtime: Runtime.NODEJS_16_X,
      handler: "handler",
    })
  }
}

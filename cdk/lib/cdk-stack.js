const cdk = require('@aws-cdk/core');
const sam = require('@aws-cdk/aws-serverless');
const yaml = require('js-yaml');
const fs   = require('fs');

class CdkStack extends cdk.Stack {
  /**
   *
   * @param {cdk.Construct} scope
   * @param {string} id
   * @param {cdk.StackProps=} props
   */
  constructor(scope, id, props) {
    super(scope, id, props);

    const include = new cdk.CfnInclude(this, "ExistingInfrastructure", {
      template: yaml.safeLoad(fs.readFileSync("./template.yaml").toString())
    });  }
}

module.exports = { CdkStack }

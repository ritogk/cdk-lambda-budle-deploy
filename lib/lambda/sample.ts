import moment from "moment"
export const handler = async (event: any): Promise<any> => {
  console.log("Lambda function executed with event:", event)
  
  console.log("moment:", moment().format("YYYY-MM-DD HH:mm:ss"))
  return {
    statusCode: 200,
    body: JSON.stringify({ message: "Hello from Lambda!" }),
  }
}

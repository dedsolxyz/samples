use graphql_client::{GraphQLQuery, Response};
use std::error::Error;

#[derive(GraphQLQuery)]
#[graphql(
    schema_path = "assets/dedsol_schema.graphql",
    query_path = "assets/queries.graphql",
    response_derives = "Debug, Default"
)]
struct TestQuery;

#[tokio::main]
async fn main() -> Result<(), Box<dyn std::error::Error>> {
    println!("[+] Executing query...");
    let variables = test_query::Variables {};
    let result = perform_test_query(variables).await?;
    println!("[+] Result: \n{:?}", result);
    println!("[+] Finished.");
    Ok(())
}

async fn perform_test_query(
    variables: test_query::Variables,
) -> Result<test_query::ResponseData, Box<dyn Error>> {
    let request_body = TestQuery::build_query(variables);
    let client = reqwest::Client::new();
    let res = client
        .post("https://node.dedsol.xyz/graphql")
        .header("Authorization", "dedsol-xxxxxxx-xxxx-xxxxxxx-xxxx")
        .json(&request_body)
        .send()
        .await?;

    if !res.status().is_success() {
        return Err(format!("Request failed with status: {}", res.status()).into());
    }

    let response_body: Response<test_query::ResponseData> = res.json().await?;
    if let Some(errors) = response_body.errors {
        return Err(format!("GraphQL errors: {:?}", errors).into());
    }

    Ok(response_body.data.unwrap_or_default())
}

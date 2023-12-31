/* eslint-disable */
// WARNING: DO NOT EDIT. This file is automatically generated by AWS Amplify. It will be overwritten.

const awsmobile = {
    "aws_project_region": "us-east-1",
    "aws_cloud_logic_custom": [
        {
            "name": "ktsAPI",
            "endpoint": "https://urp093hbka.execute-api.us-east-1.amazonaws.com/dev",
            "region": "us-east-1"
        }
    ],
    "aws_cognito_identity_pool_id": "us-east-1:19b1ef4b-ed28-4f45-92c0-2a44bf1ae4af",
    "aws_cognito_region": "us-east-1",
    "aws_user_pools_id": "us-east-1_vFIwgONCi",
    "aws_user_pools_web_client_id": "6kpijrjjtve91r94upeedpvvcb",
    "oauth": {},
    "aws_cognito_username_attributes": [
        "PHONE_NUMBER"
    ],
    "aws_cognito_social_providers": [],
    "aws_cognito_signup_attributes": [
        "PHONE_NUMBER"
    ],
    "aws_cognito_mfa_configuration": "OFF",
    "aws_cognito_mfa_types": [
        "SMS"
    ],
    "aws_cognito_password_protection_settings": {
        "passwordPolicyMinLength": 8,
        "passwordPolicyCharacters": []
    },
    "aws_cognito_verification_mechanisms": [
        "PHONE_NUMBER"
    ],
    "aws_dynamodb_all_tables_region": "us-east-1",
    "aws_dynamodb_table_schemas": [
        {
            "tableName": "Drivers-dev",
            "region": "us-east-1"
        },
        {
            "tableName": "parentsTable-dev",
            "region": "us-east-1"
        },
        {
            "tableName": "studentTable-dev",
            "region": "us-east-1"
        }
    ],
    "geo": {
        "amazon_location_service": {
            "region": "us-east-1",
            "maps": {
                "items": {
                    "mapa9873ab7-dev": {
                        "style": "VectorEsriStreets"
                    }
                },
                "default": "mapa9873ab7-dev"
            }
        }
    }
};


export default awsmobile;

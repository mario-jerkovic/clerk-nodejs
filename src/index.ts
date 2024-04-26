import 'dotenv/config'

import { createClerkClient } from '@clerk/clerk-sdk-node'

async function main() {
    const clerkClient = createClerkClient({
        secretKey: process.env.CLERK_SECRET_KEY,
    })

    const allowlistIdentifiers = await clerkClient.allowlistIdentifiers.getAllowlistIdentifierList()

    console.log('Allowlist: ', allowlistIdentifiers)
    console.log('Allowlist data: ', allowlistIdentifiers.data)
    console.log('Allowlist total count: ', allowlistIdentifiers.totalCount)
}

void main()


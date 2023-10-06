import MoonPassClient from 'moonpass-sdk'
import {Env} from 'moonpass-sdk/types'

export async function nonce(req: Request) {
    const json = await req.json<{ wallet: `0x${string}` }>()
    const {wallet} = json

    const config = {
        env: Env.DEV,
        domain: 'moonpass',
    }
    console.log('FOI')
    const client = new MoonPassClient(config)
    const response = await client.auth.nonce(wallet)

    return new Response(JSON.stringify(response))
}

export async function login(req: Request) {
    const json = await req.json<{ signature: `0x${string}` }>()
    const {signature} = json

    const config = {
        env: Env.DEV,
        domain: 'moonpass',
    }

    const client = new MoonPassClient(config)
    console.log('TESTE')
    const response = await client.auth.login(signature)

    return new Response(JSON.stringify(response))
}
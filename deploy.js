const path = require("path")
const SftpClient = require("ssh2-sftp-client")

const config = {
  host: process.env.FTP_HOST,
  username: process.env.FTP_USER,
  password: process.env.FTP_PASSWORD,
  port: process.env.FTP_PORT || 21,
}

async function main() {
  const client = new SftpClient()
  const src = path.join(__dirname, "public")
  const dst = "/"

  try {
    await client.connect(config)
    client.on("upload", info => {
      console.log(`Listener: Uploaded ${info.source}`)
    })
    let rslt = await client.uploadDir(src, dst)
    return rslt
  } finally {
    client.end()
  }
}

main()

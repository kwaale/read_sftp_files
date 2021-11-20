import ftp from 'basic-ftp';
import path from 'path';
import {Readable} from 'stream';

async createFile(filepath, content) {
  const {host, user, password} = this.options;
  const client = new ftp.Client();
  client.ftp.verbose = true;

  try {
    const dirname = path.dirname(filepath);
    const basename = path.basename(filepath);
    const readableStream = Readable.from(content, {
      encoding: 'utf-8'
    });

    await client.access({host, user, password, secure: true});
    await client.ensureDir(dirname);
    await client.uploadFrom(readableStream, basename);
  } catch (error) {
    throw new Error(error.message);
  }

  client.close();
}
Console output

Connected to ##.##.###.#:21 (No encryption)
< 220 (vsFTPd 3.0.3)

> AUTH TLS
< 234 Proceed with negotiation.

Control socket is using: TLSv1.3
Login security: TLSv1.3
> USER ###
< 331 Please specify the password.

> PASS ###
< 230 Login successful.

> TYPE I
< 200 Switching to Binary mode.

> STRU F
< 200 Structure set to F.

> OPTS UTF8 ON
< 200 Always in UTF8 mode.

> OPTS MLST type;size;modify;unique;unix.mode;unix.owner;unix.group;unix.ownername;unix.groupname;
< 501 Option not understood.

> PBSZ 0
< 200 PBSZ set to 0.

> PROT P
< 200 PROT now Private.

> MKD www
< 550 Create directory operation failed.

> CWD www
< 250 Directory successfully changed.

> MKD test
< 550 Create directory operation failed.

> CWD test
< 250 Directory successfully changed.

> MKD _notes
< 257 "/home/username/www/test/_notes" created

> CWD _notes
< 250 Directory successfully changed.

Trying to find optimal transfer strategy...
> EPSV
< 229 Entering Extended Passive Mode (|||38221|)

Optimal transfer strategy found.
> STOR 2020-12-24-jeukk.md
< 150 Ok to send data.

Uploading to ##.##.###.#:38221 (TLSv1.3)
The connection then times out.

Which version of Node.js are you using?

Node v14.15.0

Additional context

Am I right in assuming the connection doesn't close because basic-ftp doesn’t know when the stream has ended/closed?
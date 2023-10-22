import { SignIn } from "@clerk/nextjs";
import  testfile  from '../../../../../testfile.json';

 
export default function Page() {
  const test= JSON.parse(process.env.GDRIVE_CONFIG??"");
  console.log('test here : ', test.type);
  console.log('testfile here : ', testfile);
  return <SignIn />;
}
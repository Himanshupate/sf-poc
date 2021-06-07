import { LightningElement } from 'lwc';
import getAllPullRequests from '@salesforce/apex/abc.getAll';

export default class Helloworld extends LightningElement {
  Helloworld(){
  console.log('Hello World');
  }
}

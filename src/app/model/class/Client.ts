export class Client{
    clientId: number;
    contactPersonName: string;
    companyName: string;
    address: string;
    city: string;
    pincode: string;
    state: string;
    employeeString: string;
    gstNo: string;
    contactNo: string;    
    regNo: string;

    constructor() {
        this.clientId = 0;
        this.contactPersonName = '';
        this.companyName = '';
        this.address = '';
        this.city = '';
        this.pincode = '';
        this.state = '';
        this.employeeString = '';
        this.gstNo = '';
        this.contactNo = '';
        this.regNo = '';
    }
}
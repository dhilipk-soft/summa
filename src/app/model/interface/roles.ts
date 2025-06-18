export interface IRole {
  roleId: number;
  role: string;
}

export interface IDestination {
  designationId: number;
  designation: string;
}

export interface APIResponse {
  message: string;
  status: boolean;
  data: any;
}

export interface IEmployee{
    empName : string,
    empId: number,
    empCode: string ,
    empEmailId: number,
    empDesignation: string,
    role: string
}
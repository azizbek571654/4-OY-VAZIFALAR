import { ICompanyCreationArt } from '../model/company.model';

export class CreateCompanyDto implements ICompanyCreationArt {
  name: string;
  phone: string;
  email: string;
  addres: string;
}

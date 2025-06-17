import { Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/sequelize';
import { Company } from './model/company.model';
import { CreateCompanyDto } from './dto/create-company.dto';
import { UpdateCompanyDto } from './dto/update-company.dto';

@Injectable()
export class CompanyService {
  constructor(
    @InjectModel(Company)
    private readonly companyModel: typeof Company,
  ) {}

  async create(createCompanyDto: CreateCompanyDto) {
    try {
      return await this.companyModel.create(createCompanyDto);
    } catch (error) {
      return "yaratilmadi"
    }
  }

  async findAll() {
    try {
      return await this.companyModel.findAll();
    } catch (error) {
      return "topilmadi"
    }
  }

  async findOne(id: number) {
    return await this.companyModel.findByPk(id);
  }

  async update(id: number, updateCompanyDto: UpdateCompanyDto) {
    const company = await this.companyModel.findByPk(id);
    if (!company) return null;
    return await company.update(updateCompanyDto);
  }

  async remove(id: number) {
    const company = await this.companyModel.findByPk(id);
    if (!company) return null;
    await company.destroy();
    return { message: 'Deleted successfully' };
  }
}

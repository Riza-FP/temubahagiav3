import { Injectable } from '@nestjs/common';
import { CreateArticleDto } from './dto/create-article.dto';
import { UpdateArticleDto } from './dto/update-article.dto';
import { Article } from './entities/article.entity';
import * as fs from 'fs';
import * as path from 'path';

@Injectable()
export class ArticlesService {
  private readonly articles: Article[];

  constructor() {
    const articlesPath = path.resolve(__dirname, 'articles.json');
    const articlesData = fs.readFileSync(articlesPath, 'utf8');
    this.articles = JSON.parse(articlesData);
  }

  create(createArticleDto: CreateArticleDto) {
    // This is just a placeholder. In a real application, you would write to the JSON file.
    return 'This action adds a new article';
  }

  findAll() {
    const articlesPath = path.resolve(__dirname, 'articles.json');
    const articlesData = fs.readFileSync(articlesPath, 'utf8');
    return JSON.parse(articlesData);
  }

  findOne(id: number) {
    const articlesPath = path.resolve(__dirname, 'articles.json');
    const articlesData = fs.readFileSync(articlesPath, 'utf8');
    const articles = JSON.parse(articlesData);
    return articles.find((article) => article.id === id);
  }

  update(id: number, updateArticleDto: UpdateArticleDto) {
    // This is just a placeholder. In a real application, you would write to the JSON file.
    return `This action updates a #${id} article`;
  }

  remove(id: number) {
    // This is just a placeholder. In a real application, you would write to the JSON file.
    return `This action removes a #${id} article`;
  }
}

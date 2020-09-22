# -*- coding: utf-8 -*-
import scrapy
import requests
import time

class PensadorspiderSpider(scrapy.Spider):
    name = 'pensadorSpider'
    allowed_domains = ['pensador.com']
    start_urls = ['http://pensador.com/frases']
    paginacao_urls = 2    
    api_local = "http://localhost:3333/"   
    

    def parse(self, response):
        links = response.css('.block a::attr(href)').getall()
        for link in links:    
            for i in range(1,self.paginacao_urls):                                                                             
                yield response.follow(link + str(i), self.parse_links)
        pass

    def parse_links(self, response):
        link = response.url
        print('Acessando: '+link)
        category  = response.css(".top h1::text").extract_first()
        cards_phrases = response.css('.thought-card')
        for phrases in cards_phrases:
            time.sleep(0.3)
            text = phrases.css('.frase::text').get();
            autor = phrases.css('.autor a::text').get();              
            if category and text and autor:
                print('================|Enviando para API|===================')
                print('Autor - '+autor) 
                print('Frase - '+text) 
                print('Categoria - '+category)
                print('======================================================')
                payload = {'safe_name':link,'category':category,'text':text,'author':autor}                
                #yield {'safe_name':link,'category':category,'text':text,'author':autor} 
                yield requests.post(self.api_local+"PhrasesPublics", data=payload)                          
        pass

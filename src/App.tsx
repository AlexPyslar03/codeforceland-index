import React from 'react';
import LinkButton from './LinkButton';
import {FaCloudflare, FaDiscord, FaTelegram} from 'react-icons/fa';
import { SiPhpmyadmin, SiPortainer, SiWireguard } from "react-icons/si";
import { BiLogoPostgresql } from "react-icons/bi";
import { TbBrandMinecraft } from "react-icons/tb";

const App: React.FC = () => {
    return (
        <div className="app">
            <div className="header">
                <div className="header-content">
                    <h1>CodeForceLand</h1>
                </div>
                <p>Добро пожаловать на нашу площадку для разработчиков! Здесь вы найдете полезные сервисы для совместной работы и настройки серверов.</p>
                <p>Каждый из представленных ниже сервисов выполняет свою роль в инфраструктуре, упрощая управление и взаимодействие:</p>
            </div>
            <div className="link-container">
                <div className="service-description">
                    <LinkButton url="https://minecraft.codeforceland.ru" name="Minecraft" icon={TbBrandMinecraft}/>
                    <p>Откройте наш мир Minecraft, созданный для совместной работы и развлечений</p>
                </div>
                <div className="service-description">
                    <LinkButton url="https://pgadmin.codeforceland.ru" name="pgAdmin" icon={BiLogoPostgresql}/>
                    <p>Веб-интерфейс для управления PostgreSQL базами данных</p>
                </div>
                <div className="service-description">
                    <LinkButton url="https://phpmyadmin.codeforceland.ru" name="phpMyAdmin" icon={SiPhpmyadmin}/>
                    <p>Инструмент для управления базами данных MySQL</p>
                </div>
                <div className="service-description">
                    <LinkButton url="https://portainer.codeforceland.ru" name="Portainer" icon={SiPortainer}/>
                    <p>Интерфейс для упрощенного управления контейнерами Docker</p>
                </div>
                <div className="service-description">
                    <LinkButton url="https://wireguard.codeforceland.ru" name="WireGuard" icon={SiWireguard}/>
                    <p>VPN-сервис для безопасного соединения с нашей сетью</p>
                </div>
                <div className="service-description">
                    <LinkButton url="https://dash.cloudflare.com" name="CloudFlare" icon={FaCloudflare}/>
                    <p>Защита и ускорение вашего интернет-соединения с помощью сервиса Cloudflare</p>
                </div>
            </div>
            <footer>
                <p>Присоединяйтесь к нашему сообществу</p>
                <div className="link-container">
                    <LinkButton url="https://discord.gg/zSSAjZzA7T" name="Discord" icon={FaDiscord}/>
                    <LinkButton url="https://t.me/alex_pyslar" name="Telegram" icon={FaTelegram} />
                </div>
            </footer>
        </div>
    );
};

export default App;

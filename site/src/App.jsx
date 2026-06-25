import { useState } from "react";
import {
  ArrowRight,
  BoxArrowDown,
  Check,
  Clock,
  ChatCircleText,
  CloudArrowUp,
  Circuitry,
  Copy,
  Cpu,
  IdentificationCard,
  List,
  MapPin,
  PaperPlaneTilt,
  Phone,
  ShieldCheck,
  SlidersHorizontal,
  Truck,
  Wrench,
  X,
} from "@phosphor-icons/react";

const avitoUrl =
  "https://www.avito.ru/novosibirsk/predlozheniya_uslug/remont_blokov_upravleniya_ebu_7622586504";
const phoneNumber = "+7 913 386-50-12";
const phoneHref = "tel:+79133865012";
const address = "1-е Мочищенское шоссе, 3/1";
const ogrnip = "325547600105130";

const services = [
  {
    icon: Cpu,
    title: "Ремонт электронных блоков",
    text: "ЭБУ двигателя, ABS, SRS, АКПП, BCM и другие автомобильные модули.",
  },
  {
    icon: Copy,
    title: "Программирование и клонирование",
    text: "Перенос данных, адаптация, привязка и восстановление программного обеспечения.",
  },
  {
    icon: ShieldCheck,
    title: "Crash data и иммобилайзер",
    text: "Удаление crash data, ошибок и решение проблем с противоугонной системой.",
  },
  {
    icon: SlidersHorizontal,
    title: "Корректировка прошивок",
    text: "Чип-тюнинг, оптимизация ПО, отключение AdBlue, EGR, DPF и FAP.",
  },
  {
    icon: Circuitry,
    title: "Восстановление плат",
    text: "Ремонт после влаги, перегрева, короткого замыкания и перепадов напряжения.",
  },
  {
    icon: Wrench,
    title: "Автомобильная электрика",
    text: "Диагностика и ремонт датчиков, фар, замков, стеклоподъёмников и климат-систем.",
  },
];

const prices = [
  ["Диагностика электрооборудования", "от 500 ₽"],
  ["Компьютерная диагностика", "1 000 ₽"],
  ["Ремонт блока управления двигателем", "от 1 000 ₽"],
  ["Ремонт электронного блока управления", "от 1 000 ₽"],
  ["Ремонт вентилятора охлаждения", "от 1 000 ₽"],
  ["Ремонт датчиков", "от 500 ₽"],
  ["Ремонт стеклоподъёмника", "от 2 000 ₽"],
  ["Ремонт фар", "от 5 000 ₽"],
  ["Ремонт системы зажигания", "от 1 000 ₽"],
  ["Ремонт стеклоочистителей", "от 1 000 ₽"],
  ["Ремонт центрального замка", "от 1 000 ₽"],
  ["Диагностика автокондиционера", "от 1 800 ₽"],
  ["Ремонт климат-контроля", "от 1 000 ₽"],
  ["Изготовление и ремонт ключей", "от 500 ₽"],
];

const faqs = [
  [
    "Можно отправить блок из другого города?",
    "Да. Принимаем блоки транспортной компанией. Перед отправкой обсудим симптомы, комплектацию и порядок диагностики.",
  ],
  [
    "Можно приехать со своими запчастями?",
    "Можно. Совместимость и целесообразность установки проверим во время диагностики.",
  ],
  [
    "Сколько стоит ремонт?",
    "Точная стоимость зависит от неисправности и состояния блока. Сначала проводим диагностику, затем согласовываем цену и срок.",
  ],
];

const liveWorks = [
  {
    src: "/assets/live-works/workbench-diagnostics.jpg",
    title: "Диагностика приборных панелей",
    text: "Проверка на рабочем месте с измерительным оборудованием.",
  },
  {
    src: "/assets/live-works/land-rover-module.jpg",
    title: "Силовой модуль Land Rover",
    text: "Разборка и оценка состояния платы перед ремонтом.",
  },
  {
    src: "/assets/live-works/ecu-board.jpg",
    title: "Плата электронного блока",
    text: "Осмотр компонентов, дорожек и зон питания под увеличением.",
  },
  {
    src: "/assets/live-works/microsoldering.jpg",
    title: "Микропайка компонентов",
    text: "Работа с мелкими элементами и восстановлением посадочных мест.",
  },
  {
    src: "/assets/live-works/module-disassembly.jpg",
    title: "Разборка блока",
    text: "Аккуратное вскрытие, диагностика и подготовка к восстановлению.",
  },
];

function ConsultationModal({ onClose }) {
  const [sent, setSent] = useState(false);

  function submit(event) {
    event.preventDefault();
    setSent(true);
  }

  return (
    <div className="modal-backdrop" role="presentation" onMouseDown={onClose}>
      <section
        className="modal"
        role="dialog"
        aria-modal="true"
        aria-labelledby="consultation-title"
        onMouseDown={(event) => event.stopPropagation()}
      >
        <button className="icon-button modal-close" onClick={onClose} aria-label="Закрыть">
          <X size={22} />
        </button>
        {sent ? (
          <div className="success-state">
            <span className="success-icon"><Check size={28} weight="bold" /></span>
            <p className="eyebrow">Заявка подготовлена</p>
            <h2 id="consultation-title">Продолжите диалог на Avito</h2>
            <p>
              Онлайн-отправку подключим после выбора канала связи. Сейчас можно сразу написать
              мастеру в объявлении.
            </p>
            <a className="button button-primary" href={avitoUrl} target="_blank" rel="noreferrer">
              Написать на Avito <ArrowRight size={18} />
            </a>
          </div>
        ) : (
          <>
            <p className="eyebrow">Предварительная консультация</p>
            <h2 id="consultation-title">Опишите неисправность</h2>
            <p className="modal-copy">
              Чем точнее симптомы, тем быстрее сможем оценить возможную причину и порядок работ.
            </p>
            <form onSubmit={submit}>
              <label>
                Марка и модель автомобиля
                <input name="car" placeholder="Например, Land Rover Discovery 4" required />
              </label>
              <label>
                Что произошло
                <textarea
                  name="problem"
                  placeholder="Ошибки, симптомы, что уже проверяли"
                  rows="4"
                  required
                />
              </label>
              <label>
                Как с вами связаться
                <input name="contact" placeholder="Телефон, Max или Avito" required />
              </label>
              <button className="button button-primary button-wide" type="submit">
                Подготовить заявку <PaperPlaneTilt size={18} />
              </button>
            </form>
          </>
        )}
      </section>
    </div>
  );
}

export function App() {
  const [modalOpen, setModalOpen] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);
  const [showAllPrices, setShowAllPrices] = useState(false);
  const [openFaq, setOpenFaq] = useState(0);

  const openConsultation = () => {
    setMenuOpen(false);
    setModalOpen(true);
  };

  return (
    <>
      <header className="site-header">
        <a className="brand" href="#top" aria-label="ЭБУ Сервис — на главную">
          <strong>ЭБУ СЕРВИС</strong>
          <span>Новосибирск</span>
        </a>
        <nav className={menuOpen ? "nav nav-open" : "nav"} aria-label="Основная навигация">
          <a href="#services" onClick={() => setMenuOpen(false)}>Услуги</a>
          <a href="#works" onClick={() => setMenuOpen(false)}>Работы</a>
          <a href="#prices" onClick={() => setMenuOpen(false)}>Прайс-лист</a>
          <a href="#process" onClick={() => setMenuOpen(false)}>Как работаем</a>
          <a href="#about" onClick={() => setMenuOpen(false)}>О нас</a>
          <a href="#contacts" onClick={() => setMenuOpen(false)}>Контакты</a>
          <button className="button button-primary nav-cta" onClick={openConsultation}>
            Описать неисправность <ArrowRight size={17} />
          </button>
        </nav>
        <button
          className="icon-button menu-button"
          aria-label={menuOpen ? "Закрыть меню" : "Открыть меню"}
          onClick={() => setMenuOpen((value) => !value)}
        >
          {menuOpen ? <X size={25} /> : <List size={25} />}
        </button>
      </header>

      <main id="top">
        <section className="hero">
          <img
            className="hero-image"
            src="/assets/hero-ecu.webp"
            alt="Открытый блок управления двигателем на рабочем столе"
            fetchPriority="high"
            decoding="async"
          />
          <div className="hero-shade" />
          <div className="hero-content page-width">
            <div className="hero-copy">
              <p className="eyebrow">Автомобильная электроника · Новосибирск</p>
              <h1>Ремонт блоков<br />управления ЭБУ</h1>
              <p className="hero-lead">Восстановление автомобильной электроники</p>
              <ul className="hero-list">
                <li><Check size={18} /> Опыт более 10 лет</li>
                <li><Check size={18} /> ЭБУ, ABS, SRS, АКПП, BCM</li>
                <li><Check size={18} /> Программирование, адаптация и клонирование</li>
                <li><Check size={18} /> Восстановление после влаги и перегрева</li>
                <li><Check size={18} /> Легковые и коммерческие автомобили</li>
              </ul>
              <div className="hero-actions">
                <button className="button button-primary" onClick={openConsultation}>
                  Описать неисправность <ArrowRight size={18} />
                </button>
                <a className="text-link" href="#prices">Смотреть цены</a>
              </div>
              <div className="hero-facts">
                <div><Cpu size={25} /><span>Диагностика<strong>от 500 ₽</strong></span></div>
                <div><Truck size={25} /><span>Работаем<strong>по России</strong></span></div>
              </div>
            </div>
          </div>
        </section>

        <section className="doip-strip" aria-label="Будущая услуга DoIP">
          <div className="page-width doip-inner">
            <CloudArrowUp size={42} />
            <div>
              <p className="eyebrow">Новая услуга</p>
              <h2>Облачная диагностика DoIP — скоро</h2>
            </div>
            <p>
              Разрабатываем решение для дистанционной диагностики автомобиля.
              Следите за обновлениями.
            </p>
          </div>
        </section>

        <section className="about section-dark" id="about">
          <div className="about-copy section-pad">
            <p className="eyebrow">О мастерской</p>
            <h2>Делаем то, что другие считают невозможным</h2>
            <p>
              Специализируемся на ремонте и восстановлении электронных блоков управления и
              автомобильных узлов. Работаем со сложными случаями: от неисправностей после
              влаги и перегрева до восстановления после неудачных перепрошивок.
            </p>
            <p>
              Современное оборудование, глубокая диагностика и опыт позволяют возвращать к
              жизни даже блоки, которые считались неремонтопригодными.
            </p>
            <div className="about-points">
              <span><Check size={16} /> Свои запчасти можно</span>
              <span><Check size={16} /> Предварительное согласование</span>
            </div>
          </div>
          <img
            src="/assets/workshop.webp"
            alt="Мастерская по ремонту автомобильной электроники"
            loading="lazy"
            decoding="async"
          />
        </section>

        <section className="services section-light" id="services">
          <div className="page-width section-pad">
            <p className="eyebrow">Комплексные услуги</p>
            <div className="section-heading">
              <h2>Диагностика и восстановление</h2>
              <p>Работаем с электронными системами легковых и коммерческих автомобилей всех марок.</p>
            </div>
            <div className="service-grid">
              {services.map(({ icon: Icon, title, text }) => (
                <article className="service-item" key={title}>
                  <Icon size={30} />
                  <div><h3>{title}</h3><p>{text}</p></div>
                </article>
              ))}
            </div>
          </div>
        </section>

        <section className="live-works section-dark" id="works">
          <div className="page-width section-pad">
            <p className="eyebrow">Живые фото</p>
            <div className="section-heading">
              <h2>Работы из мастерской</h2>
              <p>
                Реальные блоки, платы и приборные панели в процессе диагностики и ремонта.
                Без постановочных кадров — только то, с чем работаем каждый день.
              </p>
            </div>
            <div className="live-work-grid">
              {liveWorks.map(({ src, title, text }) => (
                <article className="live-work-card" key={title}>
                  <img src={src} alt={title} loading="lazy" decoding="async" />
                  <div className="live-work-caption">
                    <h3>{title}</h3>
                    <p>{text}</p>
                  </div>
                </article>
              ))}
            </div>
          </div>
        </section>

        <section className="prices section-dark" id="prices">
          <div className="page-width price-layout section-pad">
            <div className="price-intro">
              <p className="eyebrow">Прайс-лист</p>
              <h2>Прозрачные цены на основные услуги</h2>
              <p>
                Точная стоимость зависит от сложности работ. Окончательную цену и сроки
                сообщим после диагностики.
              </p>
              <button className="button button-outline" onClick={() => setShowAllPrices((value) => !value)}>
                {showAllPrices ? "Скрыть часть списка" : "Полный перечень работ"}
                <ArrowRight size={17} />
              </button>
            </div>
            <div className="price-table">
              {(showAllPrices ? prices : prices.slice(0, 9)).map(([name, price]) => (
                <div className="price-row" key={name}>
                  <span>{name}</span><i /><strong>{price}</strong>
                </div>
              ))}
            </div>
          </div>
        </section>

        <section className="process section-light" id="process">
          <div className="page-width section-pad process-layout">
            <div className="process-title">
              <p className="eyebrow">Как мы работаем</p>
              <h2>Простой и понятный процесс</h2>
              <p>Возьмём ваше устройство в работу, даже если вы находитесь в другом городе.</p>
            </div>
            <ol className="steps">
              <li><span>1</span><BoxArrowDown size={32} /><h3>Передайте блок</h3><p>Привезите в мастерскую или отправьте транспортной компанией.</p></li>
              <li><span>2</span><Circuitry size={32} /><h3>Диагностика и ремонт</h3><p>Находим неисправность, называем стоимость и приступаем после согласования.</p></li>
              <li><span>3</span><ShieldCheck size={32} /><h3>Проверка и возврат</h3><p>Тестируем блок на стенде и возвращаем с рекомендациями по установке.</p></li>
            </ol>
          </div>
        </section>

        <section className="faq section-light">
          <div className="page-width faq-layout section-pad">
            <div>
              <p className="eyebrow">Частые вопросы</p>
              <h2>До отправки блока</h2>
            </div>
            <div className="faq-list">
              {faqs.map(([question, answer], index) => (
                <article className={openFaq === index ? "faq-item faq-open" : "faq-item"} key={question}>
                  <button onClick={() => setOpenFaq(openFaq === index ? -1 : index)}>
                    {question}<span>{openFaq === index ? "−" : "+"}</span>
                  </button>
                  {openFaq === index && <p>{answer}</p>}
                </article>
              ))}
            </div>
          </div>
        </section>

        <section className="contact" id="contacts">
          <img
            src="/assets/soldering.webp"
            alt="Ремонт платы автомобильного блока управления"
            loading="lazy"
            decoding="async"
          />
          <div className="contact-shade" />
          <div className="page-width contact-inner">
            <div className="contact-copy">
              <p className="eyebrow">Контакты</p>
              <h2>Свяжитесь с нами</h2>
              <p>Опишите неисправность — подберём решение, сориентируем по стоимости и срокам.</p>
              <div className="contact-actions">
                <button className="button button-primary" onClick={openConsultation}>
                  Описать неисправность <ArrowRight size={18} />
                </button>
                <a className="button button-outline" href={phoneHref}>
                  Позвонить
                </a>
                <a className="button button-outline" href={avitoUrl} target="_blank" rel="noreferrer">
                  Написать на Avito
                </a>
              </div>
              <div className="contact-meta">
                <div><Phone size={22} /><span>Телефон<strong>{phoneNumber}</strong></span></div>
                <div><ChatCircleText size={22} /><span>Мессенджер<strong>Max</strong></span></div>
                <div><MapPin size={22} /><span>Адрес<strong>{address}</strong></span></div>
                <div><Clock size={22} /><span>График работы<strong>Вт–Сб: 09:00–18:00</strong></span></div>
                <div><PaperPlaneTilt size={22} /><span>Время для связи<strong>Пн–Вс: 09:00–19:30</strong></span></div>
                <div><IdentificationCard size={22} /><span>ОГРНИП<strong>{ogrnip}</strong></span></div>
              </div>
              <p className="shipping-note">Возможна дистанционная работа по России.</p>
            </div>
          </div>
        </section>
      </main>

      <footer>
        <div className="page-width footer-inner">
          <span>© ЭБУ СЕРВИС, Новосибирск · ОГРНИП {ogrnip}</span>
          <a href={phoneHref}>{phoneNumber}</a>
          <a href="#top">Наверх</a>
        </div>
      </footer>

      {modalOpen && <ConsultationModal onClose={() => setModalOpen(false)} />}
    </>
  );
}

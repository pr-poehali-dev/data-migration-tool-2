import { useState } from "react"
import { Plus } from "lucide-react"

const faqs = [
  {
    question: "Сколько стоит ремонт под ключ?",
    answer:
      "Стоимость зависит от площади квартиры, выбранных материалов и объёма работ. Мы составляем подробную смету после бесплатного замера — до начала любых работ. Цена фиксируется в договоре и не меняется.",
  },
  {
    question: "Сколько времени займёт ремонт?",
    answer:
      "В среднем: студия или однушка — 2–3 месяца, двушка — 3–4 месяца, трёшка — 4–5 месяцев. Точные сроки указываем в договоре и соблюдаем их — за задержку по нашей вине предусмотрены штрафные санкции.",
  },
  {
    question: "Нужно ли мне постоянно присутствовать на объекте?",
    answer:
      "Нет, именно для этого и нужен ремонт под ключ. Вы получаете фото и видеоотчёты по этапам. Приходить можно только на согласование ключевых решений — это 2–3 встречи за весь ремонт.",
  },
  {
    question: "Вы работаете в новостройках и вторичке?",
    answer:
      "Да, работаем с обоими типами. В новостройках делаем ремонт с нуля — черновая и чистовая отделка полностью. На вторичке — демонтаж старого, полная замена коммуникаций и чистовая отделка.",
  },
  {
    question: "Какая гарантия на работы?",
    answer:
      "Даём гарантию 2 года на все виды работ. Если что-то пойдёт не так — устраняем за свой счёт. Это прописано в договоре.",
  },
  {
    question: "Как начать сотрудничество?",
    answer:
      "Оставьте заявку или позвоните нам. Выезжаем на бесплатный замер, обсуждаем ваши пожелания и бюджет, составляем смету. После согласования подписываем договор и приступаем к работе.",
  },
]

export function FAQ() {
  const [openIndex, setOpenIndex] = useState<number | null>(null)

  const toggleQuestion = (index: number) => {
    setOpenIndex(openIndex === index ? null : index)
  }

  return (
    <section id="faq" className="py-20 md:py-29">
      <div className="container mx-auto px-6 md:px-12">
        <div className="max-w-3xl mb-16">
          <p className="text-muted-foreground text-sm tracking-[0.3em] uppercase mb-6">Вопросы</p>
          <h2 className="text-6xl font-medium leading-[1.15] tracking-tight mb-6 text-balance lg:text-7xl">
            Частые вопросы
          </h2>
        </div>

        <div>
          {faqs.map((faq, index) => (
            <div key={index} className="border-b border-border">
              <button
                onClick={() => toggleQuestion(index)}
                className="w-full py-6 flex items-start justify-between gap-6 text-left group"
              >
                <span className="text-lg font-medium text-foreground transition-colors group-hover:text-foreground/70">
                  {faq.question}
                </span>
                <Plus
                  className={`w-6 h-6 text-foreground flex-shrink-0 transition-transform duration-300 ${
                    openIndex === index ? "rotate-45" : "rotate-0"
                  }`}
                  strokeWidth={1.5}
                />
              </button>
              <div
                className={`overflow-hidden transition-all duration-500 ease-in-out ${
                  openIndex === index ? "max-h-96 opacity-100" : "max-h-0 opacity-0"
                }`}
              >
                <p className="text-muted-foreground leading-relaxed pb-6 pr-12">{faq.answer}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
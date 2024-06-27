interface Props {
  title?: string;
  description?: string;
}

export default function Section({
  title = "Olá, eu sou o Gabriel Dissotti",
  description = "Desenvolvedor de sites",
}: Props) {
  return (
    <div className="m-auto max-w-2xl h-[calc(100dvh-32px)] flex flex-col justify-center items-center">
      <div className="pb-20 flex flex-col md:flex-row-reverse md:items-center gap-4 md:gap-6 lg:gap-8">
        <div>
          <div className="flex flex-col gap-4 md:gap-6 lg:gap-8">
            <h1 className="font-bold md:font-semibold text-4xl md:text-7xl lg:text-8xl leading-normal text-black">
              {title}
            </h1>

            <p className="font-semibold text-xl md:text-2xl lg:text-3xl leading-normal text-zinc-400 min-h-[90px] sm:min-h-0">
              {description}
            </p>
          </div>

          <div className="mt-10 lg:mt-14 flex flex-col items-center gap-4 md:flex-row">
            Botões 2 a
          </div>
        </div>
      </div>
    </div>
  )
}
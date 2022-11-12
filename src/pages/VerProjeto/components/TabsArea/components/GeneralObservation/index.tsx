import React from "react"
import Button from "../../../../../../components/DesignSystem/Button"
import { GeneralObservationProvider, useGeneralObservation } from "./context"

const GeneralObservationContent = () => {
  const { form } = useGeneralObservation()
  return (
    <section className="p-24">
      <article className="grid grid-cols-3 gap-16 md:!grid-cols-1">
        <div className="p-24 headline1 rounded-md border border-neutral-100-10">
          Orientação solar
          <div className={`input-container`}>
            <input
              className="input h-40 !bg-white !pl-10 !rounded-md"
              placeholder="Orientação solar"
            />
          </div>
        </div>
        <div className="p-24 headline1 flex gap-16 items-start rounded-md border border-neutral-100-10">
          <div className="flex-1">
            Latitude
            <div className={`input-container`}>
              <input
                className="input h-40 !bg-white !pl-10 !rounded-md"
                placeholder="Latitude"
              />
            </div>
          </div>
          <div className="flex-1">
            Longitude
            <div className={`input-container`}>
              <input
                className="input h-40 !bg-white !pl-10 !rounded-md"
                placeholder="Longitude"
              />
            </div>
          </div>
        </div>
        <div className="p-24 headline1 rounded-md border border-neutral-100-10">
          Observações
          <p className="paragraph2 mb-10">O Sol se põe ao Leste</p>
          
          <div className={`input-container flex gap-10`}>
            <input
              className="input h-40 !bg-white !pl-10 !rounded-md"
              placeholder="Adicionar observação"
            />
            <Button classe="btn">Adicionar</Button>
          </div>
        </div>
      </article>

      <article className="mt-24 p-24 rounded-md border border-neutral-100-10">
        <h3 className="title3 mb-24">Dados de contato</h3>
        <div className="flex md:!items-start md:flex-col gap-24 items-center mb-24">
          <label>
            Nome
            <div className={`input-container`}>
              <input
                className="input h-40 !bg-white !pl-10 !rounded-md"
                placeholder="Digite seu nome"
              />
            </div>
          </label>

          <label>
            Email
            <div className={`input-container`}>
              <input
                className="input h-40 !bg-white !pl-10 !rounded-md"
                placeholder="Digite seu e-mail"
              />
            </div>
          </label>

          <label>
            Celular
            <div className={`input-container`}>
              <input
                className="input h-40 !bg-white !pl-10 !rounded-md"
                placeholder="Digite seu Celular"
              />
            </div>
          </label>
        </div>

        <div className="w-full flex gap-8 justify-end">
          <Button classe="btn secondary">Cancelar</Button>
          <Button iconID="#icon_edit_ms">Salvar alterações</Button>
        </div>
      </article>
    </section>
  )
}

const GeneralObservation = () => {
  return (
    <GeneralObservationProvider>
      <GeneralObservationContent />
    </GeneralObservationProvider>
  )
}

export default GeneralObservation
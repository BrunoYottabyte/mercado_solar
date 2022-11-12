import React from "react"
import Button from "../../../../../../components/DesignSystem/Button"
import { useVerProjeto } from "../../../../context"
import { GeneralObservationProvider, useGeneralObservation } from "./context"

const GeneralObservationContent = () => {
  const {isRepresentative} = useVerProjeto()
  const {
    form,
    observations,
    setCurrentObservation,
    addObservation,
    currentObservation,
    handleSubmit,
    generalObservation,
  } = useGeneralObservation()
  return (
    <section className="p-24">
      <form onSubmit={form.handleSubmit(handleSubmit)}>
        <article className="grid grid-cols-3 gap-16 md:!grid-cols-1">
          <div className="p-24 headline1 rounded-md border border-neutral-100-10">
            Orientação solar
            <div className={`input-container`}>
              <input
                disabled={!isRepresentative}
                {...form.register("solar_orientation")}
                className="input h-40 !bg-white !pl-10 !rounded-md"
                placeholder="Orientação solar"
              />
            </div>
          </div>
          <div className="p-24 headline1 flex items-start rounded-md border border-neutral-100-10 gap-10">
            <div className="flex-1">
              Latitude
              <div className={`input-container`}>
                <input
                  disabled={!isRepresentative}
                  {...form.register("latitude")}
                  className="input h-40 !bg-white !pl-10 !rounded-md"
                  placeholder="Latitude"
                />
              </div>
            </div>
            <div className="flex-1">
              Longitude
              <div className={`input-container`}>
                <input
                  disabled={!isRepresentative}
                  {...form.register("longitude")}
                  className="input h-40 !bg-white !pl-10 !rounded-md"
                  placeholder="Longitude"
                />
              </div>
            </div>
          </div>
          <div className="p-24 headline1 rounded-md border border-neutral-100-10">
            Observações
            {observations.map((observation, i) => (
              <>
              <div className="flex items-center justify-between my-2">
                <p className="paragraph2" key={`${observation}-${i}`}>{observation.observation}</p>
                {/* <Button margin="0">X</Button> */}
              </div>
              {i !== (observations.length-1) && <hr style={{opacity: 0.1}}/>}
              </>
            ))}
            <div className={`input-container flex gap-10`}>
              <input
                className="input h-40 !bg-white !pl-10 !rounded-md"
                placeholder={
                  generalObservation ?
                  "Adicionar observação":
                  "Adicione as demais informações"
                }
                value={currentObservation}
                disabled={!generalObservation || !isRepresentative}
                onChange={(e) => setCurrentObservation(e.target.value)}
              />
              {generalObservation ?
                (<Button classe="btn" disabled={!isRepresentative} onClick={addObservation}>Adicionar</Button>):
                (<></>)
              }
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
                  disabled={!isRepresentative}
                  {...form.register("contact_name")}
                  className="input h-40 !bg-white !pl-10 !rounded-md"
                  placeholder="Digite seu nome"
                />
              </div>
            </label>

            <label>
              Email
              <div className={`input-container`}>
                <input
                  disabled={!isRepresentative}
                  {...form.register("contact_email")}
                  className="input h-40 !bg-white !pl-10 !rounded-md"
                  placeholder="Digite seu e-mail"
                />
              </div>
            </label>

            <label>
              Celular
              <div className={`input-container`}>
                <input
                  disabled={!isRepresentative}
                  {...form.register("contact_phone")}
                  className="input h-40 !bg-white !pl-10 !rounded-md"
                  placeholder="Digite seu Celular"
                />
              </div>
            </label>
          </div>

          <div className="w-full flex gap-8 justify-end">
            {/* <Button classe="btn secondary">Cancelar</Button> */}
            <Button iconID="#icon_edit_ms" type="submit" disabled={!isRepresentative}>Salvar alterações</Button>
          </div>
        </article>
      </form>
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
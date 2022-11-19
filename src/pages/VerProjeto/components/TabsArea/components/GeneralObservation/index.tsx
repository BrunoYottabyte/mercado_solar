import React, { useEffect } from 'react';
import Button from '../../../../../../components/DesignSystem/Button';
import { GLOBAL } from '../../../../../../utils/GLOBAL';
import {useVerProjeto} from '../../../../context';
import {GeneralObservationProvider, useGeneralObservation} from './context';

const GeneralObservationContent = () => {
  const {isRepresentative} = useVerProjeto();
  const {
    form,
    observations,
    setCurrentObservation,
    addObservation,
    currentObservation,
    handleSubmit,
    generalObservation,
  } = useGeneralObservation();
  const {
    budget_request,
    contact_email,
    contact_name,
    contact_phone,
    latitude,
    longitude,
    solar_orientation,
    id,
  } = form.getValues();
  const { setValue, watch } = form;

  const message =
    'Esse dado vai ser preenchido pelo seu representante ou integrador.';
  return (
    <section className="p-24">
      <form onSubmit={form.handleSubmit(handleSubmit)}>
        <article className="grid grid-cols-3 gap-16 md:!grid-cols-1">
          <div className="p-24 headline1 rounded-md border border-neutral-100-10">
            Orientação solar
            {isRepresentative ? (
              <div className={`input-container`}>
                <input
                  disabled={!isRepresentative}
                  {...form.register('solar_orientation')}
                  className="input h-40 !bg-white !pl-10 !rounded-md"
                  placeholder="Orientação solar"
                />
              </div>
            ) : (
              <p className="paragraph3 text-neutral-70">
                {solar_orientation || message}
              </p>
            )}
          </div>
          <div
            className={`p-24 headline1 flex items-start rounded-md border border-neutral-100-10 gap-10`}>
            <div className="flex-1">
              Latitude
              {isRepresentative ? (
                <div
                  className={`input-container ${
                    !isRepresentative ? 'disabled' : ''
                  }`}>
                  <input
                    {...form.register('latitude',{
                      onChange: (e) =>  setValue('latitude', GLOBAL.GeoFormatter(e.target.value))
                    })}
                    type="text"
                    className="input h-40 !bg-white !pl-10 !rounded-md"
                    placeholder={`${!isRepresentative ? message : 'Latitude'}`}
                  />
                </div>
              ) : (
                <p className="paragraph3 text-neutral-70">
                  {latitude || message}
                </p>
              )}
            </div>
            <div className="flex-1">
              Longitude
              {isRepresentative ? (
                <div className={`input-container`}>
                  <input
                    disabled={!isRepresentative}

                    type="text"
                    // value={GLOBAL.GeoFormatter(longitude)}
                    className="input h-40 !bg-white !pl-10 !rounded-md"
                    placeholder="Longitude"
                    {...form.register('longitude',{
                      onChange: (e) =>  setValue('longitude', GLOBAL.GeoFormatter(e.target.value))
                    })}
                  />
                </div>
              ) : (
                <p className="paragraph3 text-neutral-70">
                  {longitude || message}
                </p>
              )}
            </div>
          </div>
          <div className="p-24 headline1 rounded-md border border-neutral-100-10">
            Observações
            {observations.map((observation, i) => (
              <>
                <div className="flex items-center justify-between my-2">
                  <p className="paragraph2" key={`${observation}-${i}`}>
                    {observation.observation}
                  </p>
                  {/* <Button margin="0">X</Button> */}
                </div>
                {i !== observations.length - 1 && <hr style={{opacity: 0.1}} />}
              </>
            ))}
            {isRepresentative ? (
              <div className={`input-container flex gap-10`}>
                <input
                  className="input h-40 !bg-white !pl-10 !rounded-md"
                  placeholder={
                    generalObservation
                      ? 'Adicionar observação'
                      : 'Adicione as demais informações'
                  }
                  value={currentObservation}
                  disabled={!generalObservation || !isRepresentative}
                  onChange={e => setCurrentObservation(e.target.value)}
                />
                {generalObservation ? (
                  <Button
                    classe="btn"
                    disabled={!isRepresentative}
                    onClick={addObservation}>
                    Adicionar
                  </Button>
                ) : (
                  <></>
                )}
              </div>
            ) : !observations ? (
              <p className="paragraph3 text-neutral-70">{message}</p>
            ) : (
              ''
            )}
          </div>
        </article>

        <article className="mt-24 p-24 rounded-md border border-neutral-100-10">
          <h3 className="title3 mb-24">Dados de contato</h3>
          <div className="flex md:!items-start md:flex-col gap-24 items-center mb-24">
            <label className="flex-1">
              Nome
              {isRepresentative ? (
                <div className={`input-container`}>
                  <input
                    disabled={!isRepresentative}
                    {...form.register('contact_name')}
                    className="input h-40 !bg-white !pl-10 !rounded-md"
                    placeholder="Digite seu nome"
                  />
                </div>
              ) : (
                <p className="paragraph3 text-neutral-70">
                  {contact_name || message}
                </p>
              )}
            </label>

            <label className="flex-1">
              Email
              {isRepresentative ? (
                <div className={`input-container`}>
                  <input
                    disabled={!isRepresentative}
                    {...(form.register('contact_email'), {type: 'email'})}
                    type="email"
                    className="input h-40 !bg-white !pl-10 !rounded-md"
                    placeholder="Digite seu e-mail"
                  />
                </div>
              ) : (
                <p className="paragraph3 text-neutral-70">
                  {contact_email || message}
                </p>
              )}
            </label>

            <label className="flex-1">
              Celular
              {isRepresentative ? (
                <div className={`input-container`}>
                  <input
                    disabled={!isRepresentative}
                    {...form.register('contact_phone')}
                    className="input h-40 !bg-white !pl-10 !rounded-md"
                    placeholder="Digite seu Celular"
                  />
                </div>
              ) : (
                <p className="paragraph3 text-neutral-70">
                  {contact_phone || message}
                </p>
              )}
            </label>
          </div>

          <div className="w-full flex gap-8 justify-end">
            {/* <Button classe="btn secondary">Cancelar</Button> */}
            {isRepresentative && <Button iconID="#icon_edit_ms" type="submit" disabled={!isRepresentative}>Salvar alterações</Button>}
          </div>
        </article>
      </form>
    </section>
  );
};

const GeneralObservation = () => {
  return (
    <GeneralObservationProvider>
      <GeneralObservationContent />
    </GeneralObservationProvider>
  );
};

export default GeneralObservation;

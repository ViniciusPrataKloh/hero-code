import { InputTransparent } from "../../components/inputTransparent";

export function Schedule(){
  return(
    <section className="mt-8 mx-auto">
      <h2 className="-text-primary text-2xl font-medium mb-12">Agendamento de Horário</h2>

      <div className="flex items-center justify-center">      
        <form className="flex flex-col items-center gap-2 mt-8 font-medium -text-primary">
          <div className="flex flex-col">
            <label>Nome do cliente</label>
            <InputTransparent placeholder="Vinícius Prata" type="text"/>
          </div>
          <div className="flex flex-col">
            <label>Celular</label>
            <InputTransparent placeholder="(xx) xxxxx-xxxx)" type="tel"/>
          </div>

          <div className="flex flex-row items-center justify-between gap-10">
            <div className="flex flex-col">
              <label>Data</label>
              <InputTransparent placeholder="Seu" type="date"/>
            </div>
            <div className="flex flex-col">
              <label>Horário</label>
              <InputTransparent placeholder="Seu" type="time"/>
            </div>
          </div>

          <div className="mt-8 flex items-center justify-center gap-4">
            <button className="w-[110px] py-2.5 px-4 border-2 -border-secondary -text-secondary font-semibold rounded-2xl hover:text-white hover:bg-red-400 hover:border-red-500 transition-colors" >Cancelar</button>
            <button className="w-[110px] py-2.5 px-4 border-2 -bg-secondary -border-secondary text-white font-semibold rounded-2xl hover:-bg-secondary-50 hover:-border-secondary-50 transition-colors">Editar</button>
          </div>
        </form>
      </div>
    </section>
  )
}
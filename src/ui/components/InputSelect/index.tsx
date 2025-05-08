import sc from './select.module.scss'

export const InputSelect = () => {
  return (
    <select className={sc.select_input } id="basicSelect">
      <option value={''} className={sc.option} disabled selected>-- Select Region --</option>
      <option value={'LATAM'} className={sc.option}>Latin america</option> 
      <option value={'NA'} className={sc.option}>North America</option>
      <option value={'EMEA'} className={sc.option}>Europe, Mid. East, Africa</option>
      <option value={'APAC'} className={sc.option}>Asia-Pacific</option>
    </select>
  );
};


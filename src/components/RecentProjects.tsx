import { Application } from './Application';
import { useTranslation } from 'react-i18next';


export function RecentProjects() {
  const { t } = useTranslation();
  const projects = ['pilares', 'belgaleria', 'eloca', 'workmed', 'bemagro'];
  return (
    <Application.Root>
      <Application.Header>{t('apps.recent-projects')}</Application.Header>

      <Application.Content>
        <ul className='list-none space-y-8 px-2 pt-1 md:px-6'>
          {projects.map(proj => (
            <li key={proj} className='shadow-lg hover:scale-105 transition-all border border-zinc-800 p-4 rounded-md bg-zinc-900'>
              <h3 className='font-semibold mb-6'>{t(`recent-projects.${proj}.title`)}</h3>
              <p>{t(`recent-projects.${proj}.description`)}</p>
            </li>
          ))}
        </ul>
      </Application.Content>
    </Application.Root>
  );
}

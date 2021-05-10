import { Routes } from '@angular/router';

export const content: Routes = [
  {
    path: 'products',
    loadChildren: () => import('../../components/products/products.module').then(m => m.ProductsModule),
    data: {
      breadcrumb: "Products"
    }
  },
  {
    path: 'users',
    loadChildren: () => import('../../components/users/users.module').then(m => m.UsersModule),
    data: {
      breadcrumb: "Users"
    }
  },

  // {
  //   path: 'localization',
  //   loadChildren: () => import('../../components/localization/localization.module').then(m => m.LocalizationModule),
  //   data: {
  //     breadcrumb: "Localization"
  //   }
  // },
  {
    path: 'settings',
    loadChildren: () => import('../../components/setting/setting.module').then(m => m.SettingModule),
    data: {
      breadcrumb: "Settings"
    }
  },
];

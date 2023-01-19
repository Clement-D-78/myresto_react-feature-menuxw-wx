import React from 'react'
import Sidebar from '../../layers/Sidebar'

const AdmOrders = () => {
  return (
    <>
    <Sidebar />
    <div class="case-command-gray">
      <div class="case-dashboard-inner">
        <table class="table-dashboard">
          <thead>
            <tr>
              <th class="td-dashboard">Numéro de la commande</th>
              <th class="td-dashboard">Nom</th>
              <th class="td-dashboard">Prénom</th>
              <th class="td-dashboard">Email</th>
              <th class="td-dashboard">Détails</th>
              <th class="td-dashboard">Prix</th>
            </tr>
          </thead>
          <tbody>
            <tr class="tr-dashboard">
              <td class="td-dashboard">Numéro commande</td>
              <td class="td-dashboard">Nom </td>
              <td class="td-dashboard">Prénom</td>
              <td class="td-dashboard">mail user</td>
              <td class="td-dashboard">details commande</td>
              <td class="td-dashboard">15€</td>
            </tr>
            <tr class="tr-dashboard">
              <td class="td-dashboard">Numéro commande</td>
              <td class="td-dashboard">Nom </td>
              <td class="td-dashboard">Prénom</td>
              <td class="td-dashboard">mail user</td>
              <td class="td-dashboard">details commande</td>
              <td class="td-dashboard">15€</td>
            </tr>
            <tr class="tr-dashboard">
              <td class="td-dashboard">Numéro commande</td>
              <td class="td-dashboard">Nom </td>
              <td class="td-dashboard">Prénom</td>
              <td class="td-dashboard">mail user</td>
              <td class="td-dashboard">details commande</td>
              <td class="td-dashboard">15€</td>
            </tr>
            
          </tbody>
        </table>
      </div>
    </div>
    </>
  )
}

export default AdmOrders
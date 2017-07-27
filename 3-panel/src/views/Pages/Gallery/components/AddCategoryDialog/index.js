import Component from '../../../../../helpers/Component'
import CategoryDialog from '../../../../../helpers/CategoryDialog'

import Dialog from '../../../../../imports/materialdesign/components/Dialog'

import TextField from '../../../../../imports/materialdesign/components/TextField'
import Preloader from '../../../../../imports/materialdesign/components/Preloader'

export default class AddCategoryDialog extends Component {
  /**
   * Gets root.
   * @return {DOMElement} root
   */
  getRoot () {
    return this.elements.root
  }

  /**
   * Sets dialog action buttons.
   */
  setDialogItems () {
    const dialog = this.elements.dialog

    const items = [
      {
        text: 'DODAJ',
        onClick: this.onAddCategoryButtonClick
      },
      {
        text: 'ANULUJ',
        onClick: function () {
          dialog.toggle(false)
        }
      }
    ]

    dialog.setItems(items)
  }

  /**
   * On dialog action button add category click event.
   * @param {Event}
   */
  onAddCategoryButtonClick = (e) => {
    CategoryDialog.checkForErrors(this, function (error) {
      if (!error) {
        const snackbar = window.app.elements.addedCategorySnackbar

        snackbar.toggle(true)
      }
    })
  }

  render () {
    return (
      <div className='category-dialog' ref='root'>
        <Dialog title='Dodaj nową kategorię' ref='dialog'>
          <TextField ref={(e) => this.categoryNameTextField = e} hint='Nazwa' helperText='*Wymagane' maxLength={30} />
          <Preloader ref={(e) => this.preloader = e} />
        </Dialog>
      </div>
    )
  }

  afterRender () {
    this.setDialogItems()
  }
}
